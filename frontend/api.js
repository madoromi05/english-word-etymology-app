useEffect(() => {
    fetch("http://localhost/backend/api.php")
      .then(response => response.json())
      .then(data => setIdeas(data));
  }, []);
  