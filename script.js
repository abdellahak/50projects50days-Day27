let showNotfication = document.querySelector('.button');
let notificationContainer = document.querySelector('.notifications-container')

counter = 1;

function remove(element){
    element.parentElement.remove();
}
function createNotification(){
    if(notificationContainer.children.length == 0){
        counter =1;
    }
    let notification = document.createElement('div');
    notification.classList.add('notification');
    let date = new Date();
    notification.innerHTML = `
                            <div class="temp-bar"></div>
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <div class="notfication-content">
                                <h3>Notification number ${counter}</h3>
                                <div class="description">
                                    <p>description of notification ${counter}</p>
                                    <div class="time">${date.getHours()<10? '0'+date.getHours():date.getHours()}:${date.getMinutes()<10? '0'+date.getMinutes():date.getMinutes()}:${date.getSeconds()<10? '0'+date.getSeconds():date.getSeconds()}</div>
                                </div>
                            </div>
                            <p></p>
                            <button class="fa-solid fa-xmark" onclick="remove(this)""></button>
    `;
    counter++;
    notificationContainer.append(notification);
    function shrink(){
        notification.firstElementChild.style.width = '0%'
    }
    setTimeout(shrink, 10);
    function hide(){
        notification.remove();
    }
    setTimeout(hide, 5000);
}


showNotfication.addEventListener('click',function(){
    createNotification();
})
