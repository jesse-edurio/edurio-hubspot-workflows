<details><summary>Overview</summary>
<p></p></details>  

**Type:** Ticket workflow  
**Activation:** Indirect from task completed, or *Ticket pipeline* movement  
**Trigger:** *HSTrigger* = <u>Trigger set-up</u>, or *Status* = <u>Setup</u>  
**Key actions:** Creates initial setup tasks + triggers Zapier  

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS-PIPE-Setup-0-Setup--Create-CSS-tasks-GL-issue.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key steps  
1. Halts setup process in cases of missing information (CSS-specific).
2. Creates initial CSS tasks and sets *Zapier trigger* for setup. 

### Notes  
<i>*Zapier trigger* is toggled between setup values if necessary (rather than cleared and set) to avoid calling Zapier twice.</i>  

### Related  
- [Zapier trigger property](../articles/Workflow-internal-properties.md#zapier-trigger-zapier-trigger2)
- [CSS/Setup[1]: Create Support's tasks](../workflows/CSS-Setup-1-Create-Supports-tasks.md)  
