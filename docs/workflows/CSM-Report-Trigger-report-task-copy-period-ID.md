<details><summary>Overview</summary>
<p>The workflow activates once the survey period has definitely been created (i.e. when the survey ticket is <u>Ready to launch</u> or <u>Live</u>). To stop CSMs putting the period ID in the survey ticket rather than the report ticket (!), this workflow sets a trigger on <i>associated</i> tickets to create the task.</p></details>  

**Type:** Ticket workflow  
**Activation:** *Ticket pipeline* movement  
**Trigger:** *Status* = <u>Ready for launching</u> or <u>Live</u>  
**Key actions:** Triggers the creation of a report task (copy period ID) on <i>associated</i> ticket(s)  
<a target="_blank" href="https://app-eu1.hubspot.com/workflows/3479931/platform/flow/2256254193/edit">Link</a>  

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSM-Report-Trigger-report-task-copy-period-ID.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key points  
- If *Report* is blank, creates a warning task.  
- Triggers <u>CSM/CSS/TSK/Aux: Create or update tasks in assoc. tickets</u> workflow using *HSTrigger* to create the report task in the <b><i>report</i></b> ticket(s), not the survey ticket.    

### Related  
- [CSM/CSS/TSK/Aux: Create or update tasks in assoc. tickets](../workflows/CSM-CSS-TSK-Aux-Create-update-tasks-assoc.md)  
- [HSTrigger](../articles/Workflow-internal-properties.md#hstrigger)  
