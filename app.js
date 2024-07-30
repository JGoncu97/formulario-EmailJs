const frmEmail= document.getElementById('frm-email');
 
frmEmail.addEventListener('submit', sendEmail);

const serviceId='service_m976k2o';
const templateId='template_wccjmm9';
const apiKey='r2PmDKgUhL5-enf6F';

const email=document.getElementById('email');

function sendEmail (event){
    event.preventDefault();
    emailjs.init(serviceId);

 


    emailjs.sendForm(serviceId,templateId,frmEmail,apiKey)
        
    
    .then(result=> Swal.fire('Su mensaje se ha enviado con éxito.',{



    })) .catch( error=> {


        Swal.fire({
            icon: 'eror' ,
            title: 'Oops...',
            text: ' No ha sido posible enviar el mensaje!',
        });
    });

};


function error(){
    if(email.value == ''){
        
    }
}