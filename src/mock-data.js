let mock = [
  {
    id: 1,
    name: 'Cafe Rio Sweet Pork',
    ingrediants: [['',[
      '3-4 pounds boneless pork roast (shoulder or butt)',
      'garlic salt',
      '1 can Root beer, Coke, Pepsi, or Dr. Pepper (We usually use root beer)',
      '1/4 cup water',
      '3/4 cup brown sugar',
      '10 ounces red enchilada sauce',
      '4 ounces green chilies',
      '1/2 teaspoon chili powder'
    ]]],
    instructions: [
      'Shake garlic salt all over the pork and lay fat side down in crock-pot. Pour 1/4 cup Root Beer and 1/4 cup water in the bottom of the pot. Cover with lid and cook on low for 6 hours.',
      'Make the sauce by combining remaining Root Beer, brown sugar, enchilada sauce, green chilies, and chili powder in a blender. Puree until smooth. Place in fridge until ready to use.',
      'When meat is tender and shreds easily, remove and shred on a cutting board. Discard the fat and remaining juices in the pot.',
      'Place shredded pork back in the crock pot (no need to wash) along with the sauce. Stir together and cook on low for 1.5 hours. Remove the lid and cook on high for 30 minutes so the sauce can thicken.'
    ],
    image: 'sweet-pork.jpg',
    citationName: 'Garnish and Glaze',
    citationURL: 'https://www.garnishandglaze.com/cafe-rio-sweet-pork-recipe/'
  },
  {
    id: 2,
    name: 'Creamy Tomatillo Dressing',
    ingrediants: [['',[
      '1 (1 ounce) package Hidden Valley Ranch Dressing mix',
      '1 cup buttermilk',
      '1 cup mayonnaise',
      '2 tomatillos',
      '1 clove garlic, minced',
      '1/2 bunch cilantro, chopped',
      '1/2 teaspoon lime juice',
      '1 small jalapeno, seeds removed'
    ]]],
    instructions: [
      'Blend all ingredients together in a blender or food processor and store in the refrigerator to let the flavors meld. Beware that the dressing tends to get hotter the longer it sits.',
      'Serve over Cafe Rio\'s Sweet Barbacoa Pork Salad or burritos with Cilantro Lime Rice.'
    ],
    image: 'ashim-d-silva-ehxXXgarXsw-unsplash.jpg',
    citationName: 'The Girl Who Ate Everything',
    citationURL: 'https://www.the-girl-who-ate-everything.com/cafe-rios-creamy-tomatillo-dressing/#wprm-recipe-container-17354'
  },
  {
    id: 3,
    name: 'Cilantro Lime Rice',
    ingrediants: [['',[
      '2 Cups Rice',
      '4 Cups Water',
      '2 Tablespoons Unsalted Butter',
      '2 Teaspoons Chicken Bouillon',
      '1 Clove Garlic minced',
      '1 Handful cilantro chopped',
      '1/2 Lime juiced',
      '1 Can 4oz Diced Green Chiles'
    ]]],
    instructions: [
      'Pour everything in a rice cooker and follow product instructions, or in a pot, heat to a boil and then add the lid and turn down to low for 20-30 minutes or until tender.',
      'Remove the lid, stir to combine everything and serve immediately.'
    ],
    image: 'paula-morin-7fkhwbmb3Uk-unsplash.jpg',
    citationName: 'Oh Sweet Basil',
    citationURL: 'https://ohsweetbasil.com/cilantro-lime-rice-cafe-rio-copycat/#recipe'
  },
  {
    id: 4,
    name: 'Orange Chicken',
    ingrediants: [['CHICKEN',[
      '2 lb boneless, skinless chicken thighs',
      '1 tablespoon salt',
      '1 teaspoon white pepper',
      '1 cup cornstarch',
      '3 cups flour',
      '1 egg',
      '1 ½ cups water',
      '2 tablespoons oil',
      '6 cups oil, for frying'
    ]],['ORANGE SAUCE',[
      '1 tablespoon oil',
      '¼ teaspoon chili flake (more if you want it a little spicy)',
      '1 tablespoon garlic, minced',
      '½ teaspoon ginger, minced',
      '¼ cup sugar',
      '¼ cup brown sugar',
      '¼ cup orange juice',
      '¼ cup white distilled vinegar',
      '2 tablespoons soy sauce',
      '2 tablespoons water',
      '2 tablespoons cornstarch',
      '1 teaspoon sesame oil'
    ]]],
    instructions: [
      'On a cutting board, cut chicken into 1x1-inch (2x2-cm) cubes and set aside.',
      'In a medium mixing bowl, combine salt, white pepper, cornstarch, and flour. Whisk to combine.',
      'Add the egg, water, and oil until it reaches the consistency of pancake batter.',
      'Add the chicken to the batter and refrigerate at least 30 minutes.',
      'Heat oil in a wok or heavy bottom pan to 350˚F (180˚C).',
      'Gently add the chicken and cook for 5-6 minutes until lightly golden brown.',
      'Remove the chicken from the pan and transfer to a paper towel-lined plate.',
      'Set a heavy bottomed pot over medium- high heat and add the oil.',
      'Once the oil begins to shimmer, add the red pepper flakes, ginger, and garlic, and cook for 30 seconds, stirring constantly.',
      'Add the sugar and brown sugar, and stir to combine.',
      'Add in the orange juice and allow the sugars to begin to dissolve in the liquid, stirring occasionally.',
      'Add in the vinegar and soy sauce, and stir to combine.',
      'Add the cornstarch and water together and whisk to combine. Add to the pan and stir.',
      'Continue to cook the sauce until maple syrup consistency is achieved.',
      'Add in the fried chicken and stir until completely coated in the sauce.',
      'Top with sesame oil.'
    ],
    image: 'clayton-tonna-uf3wNWYmyRg-unsplash.jpg',
    citationName: 'Tasty',
    citationURL: 'https://tasty.co/recipe/original-orange-chicken-by-panda-express'
  },
  {
    id: 5,
    name: 'Potato Cinnamon Rolls',
    ingrediants: [['Dough',[
      '2 Cups Mashed Potatoes',
      '1 Cup Shortening',
      '½ Cup Sugar',
      '1 Tablespoon Salt',
      '2 Cups Potato Water',
      '2 Beaten Eggs',
      '2 Tablespoons yeast dissolved in 1/2 Cup warm water',
      '9-10 Cups of Flour (not too stiff)'
    ]],['Glaze',[
      '1 oz. cream cheese',
      '½ stick of butter',
      '3-4 Cups powdered sugar',
      'A little vanilla'
    ]]],
    instructions: [
      'Dissolve shortening in hot potato water. Cool to warm and add yeast. Mix well with other ingredients. Let rise for about 1 hour.',
      'I usually divide the dough into three and roll out into a rectangle. I pour melted butter on the surface then cover with brown sugar, cinnamon, and white sugar. Some add raisins, or nuts. Roll up and cut into rolls. I probably cut them about 1 ½ inches. let them raise for about ½ hour. I cook them on 375 for about 15 minutes, until the tops are golden brown. Frost them as soon as they come out of the oven.',
      'If the glaze is too thick you can thin out with milk or I use a little cream.'
    ],
    image: 'mark-olsen-oZqJMbQMJ-4-unsplash.jpg',
    citationName: '',
    citationURL: ''
  },
  {
    id: 6,
    name: 'Taco Soup',
    ingrediants: [['',[
      '1 Tablespoon Olive Oil',
      '1 Large Onion',
      '1 Teaspoon Garlic Minced',
      '1 1/2 Pounds Chicken Breasts',
      '3 Cups Chicken Broth',
      '1 Can Black Beans',
      '1 Can Pinto Beans',
      '1 Can Corn',
      '1 15 Ounce Can Tomato Sauce',
      '1 Cup Salsa',
      '1 Packet Taco Seasoning',
      '1 Teaspoon Hot Pepper Sauce, Optional'
    ]]],
    instructions: [
      'Turn the instant pot on saute and add the olive oil and onion. Saute the onion for 2-3 minutes until tender. Add the garlic and cook for one more minute.',
      'Pour in the chicken broth, stirring with a wooden spoon to deglaze the bottom of the pot.',
      'Turn the instant pot off.',
      'Add the chicken breasts, beans, corn, tomato sauce, salsa, and taco seasoning and stir well.',
      'Place the lid on the instant pot and set the pressure valve to sealing.',
      'Turn the instant pot to manual, high pressure, for 20 minutes. Quick release the pressure (NOTE: If liquid starts to come from the valve, seal, wait 5 minutes, and then release pressure.)',
      'Use two forks to shred the chicken and stir the soup well. Serve immediately with chips, cheese, and sour cream.'
    ],
    image: 'jarritos-mexican-soda-pAU112ZIXvU-unsplash.jpg',
    citationName: 'The Salty Marshmallow',
    citationURL: 'https://thesaltymarshmallow.com/instant-pot-taco-chicken-soup/#wprm-recipe-container-4030'
  }
]

export default mock;
