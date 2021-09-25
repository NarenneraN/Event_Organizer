
function change_content(event_no){
location.href=`/event/${event_no}`;
currr_active=event_no;
document.getElementById("arrow_"+curr_active).style.left=2+'px';
}
function deleteit(event_no){
location.href=`/event_d/${event_no}`;
}
