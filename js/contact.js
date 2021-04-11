const scriptURL = 'https://script.google.com/macros/s/AKfycbysd4ur9dRLiq77Sgbkki1cgmydgO5NILuUco3yCcFmMfpObl5lhd0DjMiQAEPLLAM3/exec'
            const form = document.forms['Entry-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => swal({title: "Thank You !",text: "Your Email has been recived!",icon: "success",button: "OK",}) )
                .catch(error => console.error('Error!', error.message))
            })