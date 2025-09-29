<details><summary>Overview</summary>
<p>This workflow reacts to the completion of CSS implementation/setup tasks (there is an overlap between the two processes).</p><p>In some cases, completing a task leads to the creation of the next task in the sequence; in others it causes a property change (e.g. <em>Content</em> <u>In progress</u> → <u>In review</u>) or a pipeline movement (<u>Set-up</u> → <u>Ready for launching</u>).</p><p>For <u>Chase POC</u>, the workflow triggers an email to be sent (if appropriate).</p><p>As this is a task workflow, the <em>HSTrigger</em> property is used to trigger ticket workflows where necessary for update.</p></details>

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
- [CSM/CSS/TSK/Aux: Create or update tasks in assoc. tickets](../workflows/CSM-CSS-TSK-Aux-Create-update-tasks-assoc.md)  
- [COMMS[5]/EML: Trigger email send]()
- [HSTrigger property](../articles/Workflow-internal-properties.md#hstrigger)
- [Draft/Preview property](../articles/Workflow-internal-properties.md#draftpreview)