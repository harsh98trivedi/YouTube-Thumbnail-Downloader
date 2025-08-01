    const ytInput = document.getElementById('ytlink');
    const fetchBtn = document.getElementById('fetch-btn');
    const errorMsg = document.getElementById('error-message');
    const resultArea = document.getElementById('result-area');
    const inputArea = document.getElementById('input-area');
    const previewImg = document.getElementById('thumbnailpreview');
    const thumbnailhq = document.getElementById('thumbnailhq');
    const thumbnailmq = document.getElementById('thumbnailmq');
    const thumbnaillq = document.getElementById('thumbnaillq');
    const resetBtn = document.getElementById('reset-btn');

    function getYouTubeID(url) {
      const regExp = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|u\/\w\/|watch\?v=|watch\?.+&v=))([^#&?]{11})/;
      const match = url.match(regExp);
      return match && match[1].length === 11 ? match[1] : null;
    }

    function showError(msg) {
      errorMsg.textContent = msg;
      errorMsg.classList.remove('hidden');
      ytInput.classList.add('border-red-500', 'focus:ring-red-400');
    }

    function clearError() {
      errorMsg.classList.add('hidden');
      ytInput.classList.remove('border-red-500', 'focus:ring-red-400');
    }

    function setResults(vid) {
      // Set image and download URLs
      previewImg.src = 'https://img.youtube.com/vi/' + vid + '/mqdefault.jpg';
      thumbnailhq.href = 'https://img.youtube.com/vi/' + vid + '/maxresdefault.jpg';
      thumbnailmq.href = 'https://img.youtube.com/vi/' + vid + '/hqdefault.jpg';
      thumbnaillq.href = 'https://img.youtube.com/vi/' + vid + '/mqdefault.jpg';
      // Transition UI
      inputArea.classList.add('hidden');
      resultArea.classList.remove('hidden');
      clearError();
    }

    fetchBtn.addEventListener('click', () => {
      const url = ytInput.value.trim();
      const videoId = getYouTubeID(url);
      if (videoId) {
        setResults(videoId);
      } else {
        showError('Please enter a valid YouTube video URL.');
      }
    });

    ytInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') fetchBtn.click();
    });

    ytInput.addEventListener('input', clearError);

    resetBtn.addEventListener('click', () => {
      previewImg.src = '';
      ytInput.value = '';
      inputArea.classList.remove('hidden');
      resultArea.classList.add('hidden');
      clearError();
      ytInput.focus();
    });

    // Focus input on load
    window.onload = () => { ytInput.focus(); };