**Type:** Ticket workflows  
**Activation/Triggers:** *Property* changes  
**Key actions:** Record in/out time + update cumulative total    

<div id="viewer" style="width:100%;height:520px;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/Cumulative-time-tracking.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script> 

### Calculated properties  
- ***content-progress-DIFF*** = if((is_known(*content_progress_in*) && is_known(*content_progress_out*)), time_between(*content_progress_out*, *content_progress_in*), 0)  
- ***content-progress-DURATION*** = if((*content_progress_diff* > 0), ((*content_progress_diff* / 3600000) + if((*content_progress_state* == <u>Not received</u>), if(is_known(*content_time_not_received*), *content_time_not_received*, 0), if((*content_progress_state* == <u>In progress</u>), if(is_known(*content_time_in_progress*), *content_time_in_progress*, 0), if((*content_progress_state* == <u>In review</u>), if(is_known(*content_time_in_review*), *content_time_in_review*, 0), 0)))), 0)

### Key steps  
- Updates *content_progress_in* and *content_progress_out* dynamically so that *content-progress-DIFF* shows the amount of time spent in the <i>previous</i> stage.    
- Updates cumulative totals based on calculated *content-progress-DURATION*.  
- Avoids a 'feedback loop' by triggering cumulative update on property change of *content-progress-DURATION* , NOT *content-progress-DIFF*.   
