const stories = document.querySelectorAll('.stories-section button');

stories.forEach(story =>{
    story.addEventListener('click', e =>{
        stories.forEach(s =>{s.classList.remove('active')});
        console.log("Diste click !")

        if(story.querySelector('.user-story__profile').classList.contains('empty'))return false

        story.classList.add('active');

    });
});