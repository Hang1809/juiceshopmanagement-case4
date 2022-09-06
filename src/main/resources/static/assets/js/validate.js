$.validator.addMethod("isNumberWithSpace", function (value, element) {
    return this.optional(element) || /^\s*[0-9,\s]+\s*$/i.test(value);
}, "Vui lòng nhập giá trị số");


$("#frmCreate").validate({
    rules:{
        fullNameCre:{
            required: true,
            minlength: 5,
            maxlength: 30
        },
        emailCre:{
            required: true,
            // email: true,
            minlength: 5,
            maxlength: 30

        },
        phoneCre:{
            required : true,
            phone : true
        },
        addressCre:{
            required : true
        }
    },
    messages: {
        fullNameCre: {
            required: "Vui lòng nhập tên đầy đủ",
            minlength: "Độ dài tên tối thiểu là 5",
            maxlength: "ĐỘ dài tên tối đa là 30"
        },
        emailCre: {
            required: "Vui lòng nhập email đầy đủ",
            // email: "Vui lòng nhập đúng định dạng email",
            minlength: "Độ dài email tối thiểu là 5",
            maxlength: "ĐỘ dài email tối đa là 30"
        },
        phoneCre:{
            required: "Vui lòng nhập số điện thoại đầy đủ",
            phone :"Nhập đúng kiểu số điện thoại"
        },
        addressCre:{
            required : "Vui lòng nhập địa chỉ"
        },

        errorLabelContainer: "#mdUpdate .modal-alert-danger",
        errorPlacement: function (error, element) {
            error.appendTo("#mdUpdate .modal-alert-danger");
        },
        showErrors: function (errorMap, errorList) {
            if (this.numberOfInvalids() > 0) {
                $("#mdUpdate .modal-alert-danger").removeClass("hide").addClass("show");
            } else {
                $("#mdUpdate .modal-alert-danger").removeClass("show").addClass("hide").empty();
                $("#frmUpdate input.error").removeClass("error");
            }
            this.defaultShowErrors();
        },
    },
    submitHandler: function () {
        doCreate();
    

    }
})

$("#frmUpdate").validate({
    rules: {
        fullNameUp: {
            required: true,
            minlength: 5,
            maxlength: 30
        },
        emailUp: {
            required: true,
            // email: true,
            minlength: 5,
            maxlength: 30
        }
    },
    messages: {
        fullNameUp: {
            required: "Vui lòng nhập tên đầy đủ",
            minlength: "Độ dài tên tối thiểu là 5",
            maxlength: "ĐỘ dài tên tối đa là 30"
        },
        emailUp: {
            required: "Vui lòng nhập email đầy đủ",
            // email: "Vui lòng nhập đúng định dạng email",
            minlength: "Độ dài email tối thiểu là 5",
            maxlength: "ĐỘ dài email tối đa là 30"
        },
        errorLabelContainer: "#mdUpdate .modal-alert-danger",
        errorPlacement: function (error, element) {
            error.appendTo("#mdUpdate .modal-alert-danger");
        },
        showErrors: function (errorMap, errorList) {
            if (this.numberOfInvalids() > 0) {
                $("#mdUpdate .modal-alert-danger").removeClass("hide").addClass("show");
            } else {
                $("#mdUpdate .modal-alert-danger").removeClass("show").addClass("hide").empty();
                $("#frmUpdate input.error").removeClass("error");
            }
            this.defaultShowErrors();
        },
    },
    submitHandler: function () {
        doUpdate();
    }
})



$("#frmDeposit").validate({
    rules: {
        transactionDe: {
            required: true,
            isNumberWithSpace: true
        }
    },
    messages: {
        transactionDe: {
            required: "Vui lòng nhập số tiền giao dịch",
        }
    },
    errorLabelContainer: "#mdDeposit .modal-alert-danger",
    errorPlacement: function (error, element) {
        error.appendTo("#mdDeposit .modal-alert-danger");
    },
    showErrors: function(errorMap, errorList) {
        if (this.numberOfInvalids() > 0) {
            $("#mdDeposit .modal-alert-danger").removeClass("hide").addClass("show");
        } else {
            $("#mdDeposit .modal-alert-danger").removeClass("show").addClass("hide").empty();
            $("#frmDeposit input.error").removeClass("error");
        }
        this.defaultShowErrors();
    },
    submitHandler: function () {
        doDeposit();
    }
})

$("#frmWithdraw").validate({
    rules: {
        transactionWi: {
            required: true,
            isNumberWithSpace: true
            
        }
    },
    messages: {
        transactionWi: {
            required: "Vui lòng nhập số tiền giao dịch",
        }
    },
    errorLabelContainer: "#mdWithdraw .modal-alert-danger",
    errorPlacement: function (error, element) {
        error.appendTo("#mdWithdraw .modal-alert-danger");
    },
    showErrors: function(errorMap, errorList) {
        if (this.numberOfInvalids() > 0) {
            $("#mdWithdraw .modal-alert-danger").removeClass("hide").addClass("show");
        } else {
            $("#mdWithdraw .modal-alert-danger").removeClass("show").addClass("hide").empty();
            $("#frmWithdraw input.error").removeClass("error");
        }
        this.defaultShowErrors();
    },
    submitHandler: function () {
        doDeposit();
    }
})