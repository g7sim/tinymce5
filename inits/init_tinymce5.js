{
  selector: "%SELECTOR%",
//  theme: "modern",
//  skin: "lightgray",
//  toolbar_items_size: "small",
//  menubar:false,
  plugins: [
    "advlist anchor autolink autoresize autosave charmap code emoticons fullscreen help hr",
    "image imagetools importcss insertdatetime link lists media nonbreaking paste",
    "save searchreplace table tinydrive visualblocks visualchars wordcount noneditable"
  ],
  toolbar: [
    'save | fullscreen | undo redo | styleselect | bold italic | link image',
    'alignleft aligncenter alignright searchreplace'
  ],
  autosave_interval: "20s",
  image_advtab: true,
  image_title: true,
  tinydrive_token_provider: "%CMSIMPLE_ROOT%?tinydrive=requesttoken",
  content_css: "%STYLESHEET%,%CMSIMPLE_ROOT%plugins/fa/css/font-awesome.min.css",
  importcss_append:true,
  style_formats_autohide: true,
  importcss_selector_filter: /(?:([a-z0-9\-_]+))(\.[a-z0-9_\-\.]+)$/i,
  %LANGUAGE%
  element_format: "%ELEMENT_FORMAT%",
  block_formats: "%HEADERS%;p=p;div=div;code=code;pre=pre;dt=dt;dd=dd",
  "insertdatetime_formats": ["%H:%M:%S", "%d.%m.%Y", "%I:%M:%S %p", "%D"],
  relative_urls: true,
  convert_urls: false,
  entity_encoding: "raw",
  noneditable_noneditable_class: 'fa',
  extended_valid_elements: 'span[*]'
}
