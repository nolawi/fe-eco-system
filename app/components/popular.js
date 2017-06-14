var React = require('react');

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All Too',
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang,
      }
    });
  }
  render() {
    var languages = ['All Tools','JS Frameworks', 'JS Preprocessors', 'Build Automations','Text Editors', 'UI Frameworks', 'Templating', 'Browser Refreshing', 'CSS Preprocessors', 'Style Guides', 'Version Control', 'Package Mangers', 'Performance','Code Linting','Testing','Servern Side JS'];
   

    return (
      <div>
      <h1>The Front End Eco-System</h1>

        <ul className='uk-nav uk-nav-side'>
          {languages.map(function (lang) {
            return (
              <li
               
                className={lang === this.state.selectedLanguage ? 'uk-active' : null}
             
                onClick={this.updateLanguage.bind(null, lang)}
                key={lang}>
                  <a >{lang}</a>
              </li>
            )
          }, this)}
        </ul>
              <p>This is placeholder for  {this.state.selectedLanguage} blurb to be outputted for better description</p>
      </div>
    )
  }
}

module.exports = Popular;