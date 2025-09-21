**Type:** Task workflow  
**Activation:** Internal: <u>Content[0]</u>, <u>Content[1]</u>   
**Triggers:** *Priority* change  
**Enrolment conditions:** *HSTrigger* = <u>Update CSS tasks</u>  
**Key actions:** Sets CSS tasks based on ticket state, including <u>Chase POC</u>   

<div id="viewer" style="width:100%;height:520px;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS-Content-2-Update-CSS-tasks.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key steps  
1. Updates <u>Chase POC</u> text according to status of *Admins*, *Dataset*, *Content*.  
2. Chase task *Notes* is set for email ⇒ [COMMS[3]/CSS/TXT]().  
3. Status of other content tasks updated according to dropdown state.  
4. Sets *Draft/Preview* state depending on whether <u>Send draft/preview</u> task is incomplete/present  
5. Renames tasks if needed and updates *Content task list*.  

### Notes  
<i>CSS have a text-adaptive <u>Chase POC</u> task reflecting the current state of the *Admins*, *Dataset* and *Content* properties. Depending on the *Content* property, there may also be an additional content-specific task. Note also that exact task sequence and also <u>Chase POC</u> text varies slightly according to *CSS* property.</i>  

### Related  
- [CSS/Content[0]: Admin dropdown change → chase task update](../workflows/CSS-Content-0-Admin-dropdown-change.md)
- [CSS/Content[1]: Content dropdown change → update tasks](../workflows/CSS-Content-1-Content-dropdown-change.md)
- [Draft/Preview property](../articles/Workflow-internal-properties.md#draftpreview)
- [Content task list property](../articles/Workflow-internal-properties.md#content-task-list)