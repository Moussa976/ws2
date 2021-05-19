//  Lire une vidéo
function lireAudio(record_id) {
    $('.audiosRecord').each(function(){
        $(this)[0].pause()
    })
    $('#audio'+record_id)[0].play()
}
// SweetAlertMessage
function messageAlert(typealerte, message) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: typealerte,
        title: message
    })
}
$(function(){
    $("#filtrer").click(function(){
        $('#edit_form').submit()
    })
})
