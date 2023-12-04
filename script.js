fetch("openlibrary.json")
.then(res =>{
    return res.json();
})
.then(data => {
    data.forEach(user => {
       const title  = `<p>Title: ${user.title}</p>`;
       document.querySelector('.container').insertAdjacentHTML('beforeend', title);

       const description  = `<p>Description: ${user.description}</p>`;
       document.querySelector('.container').insertAdjacentHTML('beforeend', description);
       
       const subject_places  = `<p> Subject places: ${user.subject_places}</p>`;
       document.querySelector('.container').insertAdjacentHTML('beforeend', subject_places);

       const subjects  = `<p> Subjects: ${user.subjects}</p>`;
       document.querySelector('.container').insertAdjacentHTML('beforeend', subjects);

       const subject_people  = `<p> Subject people: ${user.subject_people}</p>`;
       document.querySelector('.container').insertAdjacentHTML('beforeend', subject_people);

       const subject_times  = `<p>Subject times: ${user.subject_times}</p>`;
       document.querySelector('.container').insertAdjacentHTML('beforeend', subject_times);
    
    });
})


.catch(error => console.log (error));
