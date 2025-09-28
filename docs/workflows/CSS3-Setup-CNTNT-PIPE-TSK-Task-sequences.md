**Type:** Task workflow  
**Activation/Triggers:** Task completed      
**Key actions:** Changes ticket status and/or creates new tasks, based on the task completed   

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS3-Setup-CNTNT-PIPE-TSK-Task-sequences.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key steps  
1. Advances pipeline process tasks/state.
2. Uses and/or sets *Content* and *Draft/Preview* to determine content state.  
3. Uses *HSTrigger* to force ticket updates.
4. Determines <u>Chase POC</u> status and action.  
5. Set contacts and initial *Comms stage*. 

### Notes  
<i>(4) <u>Chase POC</u> can have status completed either by workflows (when not required) or by user to trigger an email. Even though <u>COMMS[5]/EML</u> checks for null email tasks itself, it is more efficient to check here to avoid an unnecessary *Comms stage* reassessment.</i>  

### Related  
- [COMMS[5]/EML: Trigger email send]()
- [HSTrigger property](../articles/Workflow-internal-properties.md#hstrigger)
- [Draft/Preview property](../articles/Workflow-internal-properties.md#draftpreview)