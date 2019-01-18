{
  selector: "%SELECTOR%",
//  theme: "modern",
//  skin: "lightgray",
//  toolbar_items_size: "small",
//  menubar:false,
  plugins: [
    "advlist anchor autolink autoresize autosave charmap code emoticons fontawesome fullscreen help hr",
    "image imagetools importcss insertdatetime link lists media nonbreaking paste",
    "save searchreplace table visualblocks visualchars wordcount noneditable"
  ],
  external_plugins: {
    "fontawesome": "%CMSIMPLE_ROOT%plugins/fa/editors/tinymce5/fontawesome/plugin.min.js"
  },
  toolbar: [
    'save | fullscreen | undo redo | styleselect | bold italic | link image',
    'alignleft aligncenter alignright searchreplace'
  ],
  menubar: 'edit insert view format table tools help',
  menu: {
    file: {title: 'File', items: 'newdocument'},
    edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
    insert: {title: 'Insert', items: 'link media | template hr'},
    view: {title: 'View', items: 'visualaid'},
    format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
    table: {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'},
    tools: {title: 'Tools', items: 'spellchecker code fontawesome'}
  },
  autosave_interval: "20s",
  image_advtab: true,
  image_title: true,
  file_picker_callback: "%FILEBROWSER_CALLBACK%",
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
  extended_valid_elements: 'span[*]',
  images_upload_url : "./?filebrowser=imageuploader&editor=tinymce5",
//  images_upload_base_path :"",
  images_upload_credentials: true,
  automatic_uploads: true,
  images_reuse_filename: false
}
