const governmentForms = [{
    name: "Plutocracy",
    definition: "Rule by the wealthy"
  },
  {
    name: "Oligarchy",
    definition: "Rule by a small number of people"
  },
  {
    name: "Kleptocracy",
    definition: "Rule by the thieves"
  },
  {
    name: "Theocracy",
    definition: "Rule by a religious elite"
  },
  {
    name: "Democracy",
    definition: "Rule by the people"
  },
  {
    name: "Autocracy",
    definition: "Rule by a single person"
  }];
  const names = (governmentForms) => {
    forms = []
    for(const name of governmentForms){
      if(name.name.endsWith('cy')){
        forms.push(name.name)
      }
    }
    return forms
  }
  
  console.log(names(governmentForms))
  