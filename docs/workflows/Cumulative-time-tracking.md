<details><summary>Overview</summary>
<p>To track the time spent at each stage, the workflows set the time a ticket moves in or out of any of the tracked stages. These changes cause the two calculated properties to update. Once a duration total exists, this will be added to an existing total and recorded as the new cumulative total time for that stage.</p><p>The first workflow sets the out-time whenever <em>Content</em> changes from a stage that is being tracked (not all stages are tracked). The in-time will have already been set, so this will trigger a change in <em>content-progress-DIFF</em>, which immediately triggers the second workflow.</p><p>The second workflow has two functions. Firstly, it takes the newly calculated cumulative total (<em>content-progress-DURATION</em>) and stores this value in the appropriate total. It knows the stage that <em>Content</em> has just moved out of, because this is stored in <em>content-progress-STATE</em>. Secondly, it sets the new stage and in-time for that stage (if it is a stage that is being tracked).</p>
</details>

**Type:** Ticket workflows  
**Activation/Triggers:** *Property* changes  
**Key actions:** Record in/out time + update cumulative total    

<div style="display:flex;">
<a style="width:50%;padding:0 10px;margin:0 0 3px 0;" target="_blank" href="https://app-eu1.hubspot.com/workflows/3479931/platform/flow/2298757336/edit">CSS/TRACK: Set out-time of previous Content stage</a>
<a style="width:50%;padding:0 10px;margin:0 0 3px 0;" target="_blank" href="https://app-eu1.hubspot.com/workflows/3479931/platform/flow/2298674390/edit">CSS/TRACK: Update cumulative time of Content stage</a>
</div>
<div style="display:flex;">
<div id="viewer" style="width:50%;height:60vh;border:1px solid #ddd;"></div>
<div id="viewer2" style="width:50%;height:60vh;border:1px solid #ddd;"></div>
</div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS-TRACK-Set-out-time-of-previous-Content-stage.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>  
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS-TRACK-Update-cumulative-time-of-Content-stage.png";
    OpenSeadragon({ id: "viewer2", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script> 

### Key points   
- Updates *content-progress-in* and *content-progress-out* dynamically so that *content-progress-DIFF* shows the amount of time spent in the <i>previous</i> stage.  
- Both calculated properties are zero unless both the in-time and out-time are set. 
- Updates cumulative totals based on calculated *content-progress-DURATION* BUT triggers update based on value change of *content-progress-DIFF*. A trigger based on change in *content-progress-DURATION* would create an infinite 'feedback loop'.     

### Calculated properties  
- ***content-progress-DIFF*** = if((is_known(*content-progress-in*) && is_known(*content-progress-out*)), time_between(*content-progress-out*, *content-progress-in*), 0)  
- ***content-progress-DURATION*** = if((*content-progress-diff* > 0), ((*content-progress-diff* / 3600000) + if((*content-progress-state* == <u>Not received</u>), if(is_known(*content-time_not_received*), *content-time_not_received*, 0), if((*content-progress-state* == <u>In progress</u>), if(is_known(*content-time_in_progress*), *content-time_in_progress*, 0), if((*content-progress-state* == <u>In review</u>), if(is_known(*content-time_in_review*), *content-time_in_review*, 0), 0)))), 0)  

<details><summary>Calculated properties: Explanation</summary>
<p><em>content-progress-DIFF</em> calculates the difference between the in-time and the out-time. If either of these properties is not set, it evaluates to zero. Note that the times used in this calculation are in milliseconds.</p><p><em>content-progress-DURATION</em> first checks to see if <em>content-progress-DIFF</em> actually has a value: if not, it evaluates to zero. Assuming <em>content-progress-DIFF</em> > 0, it first converts it from milliseconds to hours and then works out which stored property it needs to add it to. It uses <em>content-progress-state</em> to do this.</p><p>For example, if the <i>Content</i> has just moved out of <u>Not received</u>, the calculation will take the current value of <em>content-time_not_received</em> and add it to <em>content-progress-DIFF</em> to give a new cumulative total for the <u>Not received</u> stage.</p><p>To avoid null errors, in all cases the calculation checks that the value exists (using <i>is_known</i>) and takes it as zero if not.</p></details>