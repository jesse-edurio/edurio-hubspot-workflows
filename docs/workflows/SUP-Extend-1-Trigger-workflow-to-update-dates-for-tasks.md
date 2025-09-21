**Type:** Task workflow  
**Activation/Triggers:** Task completed  
**Enrolment conditions:** *Title* = <u>Trigger automation to update...</u>  
**Key actions:** Triggers extension workflow continuation only if Zapier has returned dates  

<div id="viewer" style="width:100%;height:520px;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/SUP-Extend-1-Trigger-workflow-to-update-dates-for-tasks.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key steps  
- Uncompletes task if Zapier hasn't returned dates (adds <u>!!</u> to *Title* as indicator)  
- Triggers ticket workflow using *HSTrigger* change.  

### Notes  
<i><u>Extension task1</u> and <u>Extension task2</u> trigger the same workflow. The two values originally had different functionality but this was later removed. The values have been kept in case an alternative variant is required in future.</i>  

### Related  
- [HSTrigger property](../articles/Workflow-internal-properties.md#hstrigger)
