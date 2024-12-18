    let currentStep = 1;
    function showStep(step) {
      document.querySelectorAll('.step').forEach((el) => el.classList.remove('active'));
      document.getElementById(`step${step}`).classList.add('active');
      document.querySelectorAll('.step-indicator span').forEach((el, index) => {
        el.classList.toggle('active', index + 1 === step);
      });
      document.getElementById('prev-btn').disabled = step === 1;
      document.getElementById('next-btn').innerText = step === 3 ? 'Submit' : 'Next';
    }
    function nextStep() {
      if (currentStep < 3) {
        currentStep++;
        showStep(currentStep);
      } else {
        document.getElementById("result").innerText = "Submitted successfully!"
      }
    }
    function prevStep() {
      if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
      }
    }
    showStep(currentStep);
  
