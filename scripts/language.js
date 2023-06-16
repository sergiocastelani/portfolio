// Maintain a supported Language List
var langTypes = ['en', 'pt'];
// Get browser Language
var userLang = localStorage.getItem("language") || 
                navigator.language || 
                navigator.userLanguage;
// extract Language (en-US => en)
userLang = userLang.substring(0, 2);
// Call the function to set language
changeLang(userLang);

// function to change language
function changeLang(lang) 
{
  localStorage.setItem("language", lang);

  langTypes.forEach((langType) => 
  {
    // if language matches, display
    if (langType == lang) 
    {
      var langElems = document.querySelectorAll('[lang="' + langType + '"]');
      langElems.forEach((elem) => 
      {
        elem.classList.remove("hide");
      });
    }
    else 
    {
      hideLang(langType);
    }
  });
}

// function to hide language
function hideLang(lang) 
{
  var langElems = document.querySelectorAll('[lang="' + lang + '"]');
  langElems.forEach((elem) => 
  {
    if (elem.tagName != "HTML")
      elem.classList.add("hide");
  })
}