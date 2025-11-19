<details><summary>Overview</summary>
<p>The <em>CSS: Create</em> property is a dropdown that acts a functional 'button', allowing users to create tasks (or GitLab issues) as an action. The property clears its value when the action has been performed, allowing the user to perform another action if needed.</p></details>  

**Type:** Ticket workflow  
**Activation/Trigger:** *CSS: Create* dropdown change  
**Key actions:** Creates tasks (or notes) OR triggers Zapier to create a new GitLab set-up/close issue  
<a target="_blank" href="https://app-eu1.hubspot.com/workflows/3479931/platform/flow/2342450362/edit">Link</a>  

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS-Aux-TSK-GTLB-Create-additional-tasks-GL-issues-for-CSS.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Notes  
<i>As the creation of a new GitLab issue will overwrite the existing value of *Link to Gitlab Setup/Close*, a note is created to store the previous value.</i>

### <span class="red">To do</span>
<span class="red">Ideally, Zapier should append new issue links to the existing value, rather than overwrite it. TO-DO (non-urgent).</span>  

### Related  
- [CSS: Create](../articles/User-controlled-property-triggers-flags.md#css-create)  
- [Zapier trigger](../articles/Workflow-internal-properties.md#zapier-trigger-zapier-trigger2)  
