<details><summary>Overview</summary>
<p>Since the <em>Dataset</em> property contributes both to the <u>Chase POC</u> title/email text and also to the <em>Comms stage</em> property, any change to <em>Dataset</em> triggers a CSS task update and may also advance the <em>Comms stage</em> to <u>Confirm ready for set-up</u> (if the content is also ready).</p></details>  

**Type:** Ticket workflow  
**Activation:** User action  
**Trigger:** *Dataset* dropdown change  
**Key actions:** Triggers <u>Update CSS tasks</u>  
<a target="_blank" href="https://app-eu1.hubspot.com/workflows/3479931/platform/flow/2280078555/edit">Link</a>  

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS-CNTNT-0-Dataset-dropdown-change.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key steps  
- *HSTrigger* change + task priority update.  
- Advances *Comms stage* if both content and dataset are ready.

### Related  
- [CSS/CNTNT[2]: Update CSS tasks based on content dropdown/task completion changes](../workflows/CSS-CNTNT-2-Update-CSS-tasks.md)  
- [Chase POC task](../articles/CSS-tasks-Chase-POC.md)  
- [HSTrigger property](../articles/Workflow-internal-properties.md#hstrigger)  
- [COMMS[0]: Advance comms stage]()  
- [Comms stage property](../articles/Workflow-internal-properties.md#comms-stage)  