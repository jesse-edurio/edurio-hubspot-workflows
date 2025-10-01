**Type:** Ticket workflow  
**Activation:** User action  
**Trigger:** *Admins* dropdown change  
**Key actions:** Creates a unique <u>Chase-POC</u> task if needed    
<a target="_blank" href="https://app-eu1.hubspot.com/workflows/3479931/platform/flow/2283067604/edit">Link</a>  

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS-CNTNT-0-Admin-dropdown-change.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key steps  
- Creates unique <u>Chase-POC</u> task if needed. The hyphen means that this task will be ignored by CNTNT workflows.  