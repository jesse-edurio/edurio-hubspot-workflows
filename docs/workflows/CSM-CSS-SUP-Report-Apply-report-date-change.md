**Type:** Ticket workflow  
**Activation:** User action  
**Trigger:** *Report Due Date* changed  
**Key actions:** Copies or triggers process to copy *report due date* between survey and report tickets; handles cases where multiple reports are linked to the same survey ticket  
<a target="_blank" href="https://app-eu1.hubspot.com/workflows/3479931/platform/flow/2268955859/edit">Link</a>    

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSM-CSS-SUP-Report-Apply-report-date-change.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Notes  
<i>If the change is made in a survey ticket, <u>Trigger report due date change/task</u> is set on all associated report tickets. If the change is made in a report, it will update the survey ticket only if the report is the first-created report.</i>  

### Related  
- [CSM/CSS/TSK/Aux: Create or update tasks in assoc. tickets](../workflows/CSM-CSS-TSK-Aux-Create-update-tasks-assoc.md)   
- [Report-Is-First-Associated](../articles/Workflow-internal-properties.md#report-is-first-associated)  
- [HSTrigger](../articles/Workflow-internal-properties.md#hstrigger)  