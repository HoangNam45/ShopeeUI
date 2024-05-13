
function handleEvent(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện
  }


// XỬ LÝ ICON CLASS
var checkbox1 = document.getElementById("mobile-search-checkbox");
var checkbox2 = document.getElementById("mobile-search-close");
// Thêm sự kiện "change" vào checkbox1
checkbox1.addEventListener("change", function() {
    // Kiểm tra trạng thái của checkbox1 và cập nhật checkbox2
    checkbox2.checked = !checkbox1.checked;
});

// Thêm sự kiện "change" vào checkbox2
checkbox2.addEventListener("change", function() {
    // Kiểm tra trạng thái của checkbox2 và cập nhật checkbox1
    checkbox1.checked = !checkbox2.checked;
});


// XỬ LÝ ICON MENU
// document.addEventListener("DOMContentLoaded", function () {
//     var menuIcon = document.getElementById("menuIcon");
//     var menu = document.getElementById("category");

//     // Hiển thị hoặc ẩn menu khi bấm vào icon
//     menuIcon.addEventListener("click", function () {
//         menu.classList.toggle("hidden");
//     });

//     // Ẩn menu khi bấm ra ngoài menu
//     document.addEventListener("click", function (event) {
//         if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
//             menu.classList.add("hidden");
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('nav-mobile-input');
    var overlay = document.querySelector('.nav_overlay');
    var caytimdai= document.getElementById('jajaa')

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            overlay.style.display = 'block';
            caytimdai.style.transform = 'translateX(0%)';
            caytimdai.style.opacity = '1';
        } else {
            overlay.style.display = 'none';
            caytimdai.style.transform = 'translateX(-100%)'
        }
    });
});

function clearFormLog(){
    login_user_account.value=''
    login_user_password.value=''
    
    document.getElementById('login_account_valid_text').innerHTML = '';
    document.getElementById('login_password_valid_text').innerHTML = '';
}
function clearFormReg(){
    user_account.value=''
    user_password.value=''
    
    document.getElementById('account_valid_text').innerHTML = '';
    document.getElementById('password_valid_text').innerHTML = '';
    document.getElementById('password_rewrite_valid_text').innerHTML = '';
}



// Xử lý form login

var modal= document.getElementById("tuilamodal");
var modal_overlay = document.getElementById("tuilamodal_overlay");
var login_btn=document.getElementById("tuilanam");
var login = document.getElementById("login");
var back_login=document.getElementById("tuiladeback_login");
var change_to_reg=document.getElementById("change_to_reg");

if(login_btn) {
    login_btn.addEventListener("click", function() {
        modal.style.display = "flex";
        login.style.display = "block";
        clearFormLog()
    })
    
    change_to_reg.addEventListener("click", function() {
        login.style.display = "none";
        register.style.display = "block";
        clearFormReg()
    })
    
    back_login.addEventListener("click", function() {
        modal.style.display = "none";
        login.style.display = "none";
    })
}


// Xử lý form register
var register_btn=document.getElementById("tuicunglanam");
var register = document.getElementById("register");
var change_to_log = document.getElementById("change_to_log");
var back_register = document.getElementById("tuiladeback_register")

if(register_btn){
    register_btn.addEventListener("click", function() {
        modal.style.display = "flex";
        register.style.display = "block";
        clearFormReg()
    })
    
    change_to_log.addEventListener("click", function() {
        register.style.display = "none";
        login.style.display = "block";
        clearFormLog()
    })
    
    back_register.addEventListener("click", function() {
        modal.style.display = "none";
        register.style.display = "none";
    })
}




//Validate form register
const validator = require('validator')
const user_account=document.getElementById('account')
const user_password=document.getElementById('password')
const user_password_rewrite=document.getElementById('password_rewrite')


function validateAccount(){
    const account=user_account.value
    if (!validator.isAlphanumeric(account) || !validator.isLength(account, { min: 3, max: 30 })) {
        document.getElementById('account_valid_text').innerHTML = 'Tài khoản không hợp lệ, tối thiểu 3 ký tự và tối đa 30 ký tự';

    }
    else {
        document.getElementById('account_valid_text').innerHTML = '';
    }
}
function validatePassword(){
    const password=user_password.value
    if (!validator.isLength(password, { min: 6 })) {
        document.getElementById('password_valid_text').innerHTML = 'Mật khẩu phải có ít nhất 6 ký tự';

    }
    else {
        document.getElementById('password_valid_text').innerHTML = '';
    }
}
function validatePasswordRewrite(){
    const password_rewrite=user_password_rewrite.value
    if (!validator.equals(user_password.value, password_rewrite)) {
        document.getElementById('password_rewrite_valid_text').innerHTML = 'Mật khẩu nhập lại không trùng khớp với mật khẩu';

    }
    else {
        document.getElementById('password_rewrite_valid_text').innerHTML = '';
    }
}

user_account.addEventListener('blur', function () {
    validateAccount();
});
user_account.addEventListener('input', function(){
    if(validator.isAlphanumeric(user_account.value) && validator.isLength(user_account.value, { min: 3, max: 30 })){
        document.getElementById('account_valid_text').innerHTML = '';
    }
});


user_password.addEventListener('blur', function () {
    validatePassword();
});
user_password.addEventListener('input', function(){
    if (validator.isLength(user_password.value, { min: 6 })) {
        document.getElementById('password_valid_text').innerHTML = '';
    }
});


user_password_rewrite.addEventListener('blur', function () {
    validatePasswordRewrite();
});
user_password_rewrite.addEventListener('input', function(){
    if (validator.equals(user_password.value, user_password_rewrite.value)) {
        document.getElementById('password_rewrite_valid_text').innerHTML = '';
    }
});


const submit_reg_account=document.getElementById('register_form_btn')
document.getElementById('registrationForm').addEventListener('submit', function(event){
    if((!validator.isAlphanumeric(user_account.value) || !validator.isLength(user_account.value, { min: 3, max: 30 })) ||  !validator.isLength(user_password.value, { min: 6 }) || !validator.equals(user_password.value, user_password_rewrite.value)){
        validateAccount();
        validatePassword();
        validatePasswordRewrite();
        event.preventDefault();
    }

})



// Validate form login
const login_user_account=document.getElementById('login_account')
const login_user_password=document.getElementById('login_password')

function validateAccountLogin(){
    if (!validator.isAlphanumeric(login_user_account.value) || !validator.isLength(login_user_account.value, { min: 3, max: 30 })) {
        document.getElementById('login_account_valid_text').innerHTML = 'Tài khoản không hợp lệ, tối thiểu 3 ký tự và tối đa 30 ký tự';
    }
    else {
        document.getElementById('login_account_valid_text').innerHTML = '';
    }
}
function validatePasswordLogin(){
    if (!validator.isLength(login_user_password.value, { min: 6 })) {
        document.getElementById('login_password_valid_text').innerHTML = 'Mật khẩu phải có ít nhất 6 ký tự';

    }
    else {
        document.getElementById('login_password_valid_text').innerHTML = '';
    }
}



login_user_account.addEventListener('blur', function () {
    validateAccountLogin();
});
login_user_account.addEventListener('input', function(){
    if(validator.isAlphanumeric(login_user_account.value) && validator.isLength(login_user_account.value, { min: 3, max: 30 })){
        document.getElementById('login_account_valid_text').innerHTML = '';
    }
});


login_user_password.addEventListener('blur', function () {
    validatePasswordLogin();
});
login_user_password.addEventListener('input', function(){
    if (validator.isLength(login_user_password.value, { min: 6 })) {
        document.getElementById('login_password_valid_text').innerHTML = '';
    }
});



document.getElementById('loginForm').addEventListener('submit', function(event){
    if((!validator.isAlphanumeric(login_user_account.value) || !validator.isLength(login_user_account.value, { min: 3, max: 30 })) ||  !validator.isLength(login_user_password.value, { min: 6 })){
        validateAccountLogin();
        validatePasswordLogin();
        event.preventDefault();
    }

})






// Xử lý nhấp ra ngoài form
window.addEventListener("click", function (event) {
    if (event.target == modal_overlay ) {
       modal.style.display = "none";
       register.style.display = "none";
       login.style.display = "none";
    }
});
// Xử lý avatar
    const submit_avt_btn=document.getElementById('submit_avt_btn')
    if(submit_avt_btn){
        submit_avt_btn.addEventListener('click', handleEvent)
    }
    const file_input = document.getElementById('avt_input')
    if(file_input){
        file_input.addEventListener('change', function(event) {
            submit_avt_btn.removeEventListener('click', handleEvent)
            submit_avt_btn.style.cssText = "background: #ee4d2d; color: #fff;";
            var file = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
              document.getElementById('avatarr').style.backgroundImage = "url(" + e.target.result + ")";
            };
            reader.readAsDataURL(file);
          });
          document.getElementById('select_img').addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn form được gửi
            file_input.click();
          });
          console.log(file_input)
    }
   