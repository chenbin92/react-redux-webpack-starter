class ProgrammingLanguages{
  constructor(language, year){
    this.language = language;
    this.year = year;
  }

  say(){
    return `language: ${this.language}, Release time: ${this.year}`;
  }
}

export default ProgrammingLanguages;
