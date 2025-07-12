import React from "react";
// return a button that toggles dark mode on/off
// Button lives in the header
// callback?
// props?
// return h2

function Header ({isDark, onDarkModeClick}) {
   

  return (
<header>
    <h2>Shopster</h2>
    <button onClick={ onDarkModeClick }> 
        {isDark? "Dark" : "Light"} Mode
    </button>
</header>
  );
}


export default Header;