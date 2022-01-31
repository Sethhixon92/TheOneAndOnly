import React from 'react';

function Nav() {
    const categories = [
      {
          name:'El Buen Sabor',
          description:
            "This is the 1st group project I did. In this we made a website for consumers to find recipes to make at home",
      },
      {
          name: 'Anansi Corp.',
          description: 
          "This is the 2nd group project I did. In this we made a database and an app for companies to post schedules, post lists for employees, and cover shifts",
      },
      {
          name: 'VividStrokes',
          description:
          "This is the 3rd group project I did. In this we made an app for consumers to find digital artists. The consumers can also purchase some art  or support the artist with donations."
      },
    ];

    function categorySelected() {
        console.log("hello")
    }

    return (
        <header>
            <h2>
                <a href='/'>
                    
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                        className="mx-1"
                        key={category.name}
                        >
                            <span onClick={categorySelected} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;