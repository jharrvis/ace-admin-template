Dropzone.autoDiscover = false;

jQuery(function($) {
  try {

    $('#dropzone').addClass('dropzone');
    var myDropzone = new Dropzone('#dropzone', {
      previewTemplate: $('#preview-template').html(),
      // autoProcessQueue: false,
      addRemoveLinks: false,
      
      thumbnailHeight: 120,
      thumbnailWidth: 120,
      maxFilesize: 0.5,
      filesizeBase: 1000,
    
      //addRemoveLinks : true,
      //dictRemoveFile: 'Remove',

    
      thumbnail: function(file, dataUrl) {
        if (file.previewElement) {
          $(file.previewElement).removeClass("dz-file-preview");
          $(file.previewElement).find("[data-dz-thumbnail]").each(function() {
            var thumbnailElement = this;
            thumbnailElement.alt = file.name;
            thumbnailElement.src = dataUrl;
          })

          setTimeout(function() { $(file.previewElement).addClass("dz-image-preview") }, 1)
        }
      }  
    })// new Dropzone



    // simulating upload progress
    var minSteps = 6,
        maxSteps = 60,
        timeBetweenSteps = 100,
        bytesPerStep = 100000;

    myDropzone.uploadFiles = function(files) {
      var self = this;

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
            totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

        for (var step = 0; step < totalSteps; step++) {
          var duration = timeBetweenSteps * (step + 1);
          setTimeout(function(file, totalSteps, step) {
            return function() {
              file.upload = {
                progress: 100 * (step + 1) / totalSteps,
                total: file.size,
                bytesSent: (step + 1) * file.size / totalSteps
              };

              self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);
              if (file.upload.progress == 100) {
                file.status = Dropzone.SUCCESS;
                self.emit("success", file, 'success', null);
                self.emit("complete", file);
                self.processQueue();
              }
            };
          }(file, totalSteps, step), duration);
        }// fpr step
      }//for i

    }// myDropzone.uploadFiles

  } catch(err) {
    // console.log(err)
    // alert('Dropzone.js does not support older browsers!');
    $('#dropzone').addClass('p-0')
    .find('.fallback').removeClass('d-none')
    .end().find('.dz-default').addClass('d-none')
    .end().find('input[type=file]').aceFileInput({
      style: 'drop',
      droppable: true,
  
      container: 'border-0 py-3',
  
      placeholderClass: 'text-125 text-600 text-grey-m3 my-2',
      placeholderText: 'Drop images here or click to choose',
      placeholderIcon: '<i class="fa fa-cloud-upload-alt fa-3x text-info-m2 my-2"></i>',
  
      //previewSize: 64,
      thumbnail: 'large'
    })
  }

})