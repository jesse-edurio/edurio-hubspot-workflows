**Type:** Ticket workflow  
**Activation:** *Ticket pipeline* movement  
**Triggers:** *Status* = <u>Live</u>  
**Key actions:** Creates CSS close task + triggers Zapier  

<div id="viewer" style="width:100%;height:520px;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS-PIPE-Close-0-Live--Create-task-GL-issue.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Notes  
<i>*Zapier trigger* is toggled between setup values if necessary (rather than cleared and set) to avoid calling Zapier twice.</i>  

### Related  
- [Zapier trigger property](../articles/Workflow-internal-properties.md#zapier-trigger-zapier-trigger2)
- [CSS/Close[1]: Create Support's task(s)](../workflows/CSS-Close-1-Create-Supports-task(s).md)  
