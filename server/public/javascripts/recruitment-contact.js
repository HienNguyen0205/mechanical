const forms = document.querySelectorAll('.needs-validation')

const submitform = () => {
    const formData = new FormData(forms[0])
    axios.post('/recruitment-contact/recruitment', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(res => {
        alert(res.data.message)
    })
    .catch(err => console.error(err))
}

Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }else{
            submitform()
        }
        form.classList.add('was-validated')
    }, false)
})