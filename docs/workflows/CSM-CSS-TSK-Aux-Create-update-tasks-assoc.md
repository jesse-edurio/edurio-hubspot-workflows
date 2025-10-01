<details><summary>Overview</summary>
<p><em>HSTrigger</em> is used both by task workflows to trigger a ticket workflow on their associated ticket, and by ticket workflows to trigger a workflow on an associated ticket – for example, an action on a survey ticket might need to trigger a workflow on the associated report ticket. This workflow handles some of these triggers.</p>In the case of the <u>Trigger update CSS tasks</u> action, the <em>HSTrigger</em> is changed to <u>Update CSS tasks</u>. The latter is NOT a trigger but rather a flag: the following priority change will cause tasks to enter the <u>CSS/CNTNT[2]</u> workflow, where <em>HSTrigger</em> = <u>Update CSS tasks</u> is an enrolment condition.</p></details>  

**Type:** Ticket workflow  
**Activation:** Internal  
**Trigger:** *HSTrigger* changed  
**Key actions:** Creates ticket-related maintenance tasks; can also trigger CSS task updates  
<a target="_blank" href="https://app-eu1.hubspot.com/workflows/3479931/platform/flow/2256255188/edit">Link</a>  

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSM-CSS-TSK-Aux-Create-update-tasks-assoc.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key steps  
1. Creates action/warning tasks after ticket creation.
2. *HSTrigger* change + task priority update. Triggers <u>CSS/CNTNT[2]</u>.  
3. Handles alignment of report's due date based on change in implementation ticket. 

### Notes  
<i><u>Trigger update CSS tasks</u> is used by a task workflow (<u>CSS3/Setup/CNTNT/PIPE/TSK: Task sequences</u>). It is necessary because a task workflow cannot trigger actions on other tasks associated to the same ticket. It is necessary to switch to a ticket workflow to achieve this.</i>  

### Related  
- [HSTrigger property](../articles/Workflow-internal-properties.md#hstrigger)  
- [Using property triggers/flags](../articles/Article-How-to-circumvent-HubSpots-limitations.md#using-property-triggersflags)  
- [CSS/CNTNT[2]: Update CSS tasks based on content dropdown/task completion changes](../workflows/CSS-CNTNT-2-Update-CSS-tasks.md)  
- [CSS3/Setup/CNTNT/PIPE/TSK: Task sequences](../workflows/CSS3-Setup-CNTNT-PIPE-TSK-Task-sequences.md)  
