# 1. How do you make a Circle in CSS?
To make a circle in CSS, use the border-radius property.

- You can also use the width and height property to set the dimensions of the circle and use the border-radius property to make it a circle.

For example:
```
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
```
- You can also use the border-radius to create circle by using percentage.

```
.circle {
  width: 50%;
  height: 0;
  padding-bottom: 50%;
  border-radius: 50%;
}
```
- You can also create circle using CSS3 with the border-radius: 50% and border: solid thick transparent, it will create the circle with a border.

```
.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid thick transparent;
}
```
# 2. What is Z-index?
The z-index property in CSS controls the vertical stacking order of elements that overlap. Elements with a higher z-index value will appear in front of elements with a lower z-index value.

The z-index property only works on elements that have a position value of absolute, relative, or fixed. By default, the z-index value of an element is zero, so elements with a positive z-index value will appear in front of elements with a default (zero) z-index value.

You can use the z-index property to create the illusion of layers, with elements on higher layers appearing in front of elements on lower layers. For example, you could use z-index to place a dropdown menu in front of other content on a webpage, or to place a tooltip in front of the element it is associated with.

```
.element1 {
  position: absolute;
  z-index: 1;
}

.element2 {
  position: absolute;
  z-index: 2;
}
```

# 3. What is a Vendor Prefix and What is it's Purpose?
A vendor prefix is a CSS property prefix that is added to a standard CSS property to ensure compatibility with specific browser versions. Vendor prefixes are used to support browser-specific CSS features that may not yet be part of the official CSS standard.

```
/* Standard property */
border-radius: 10px;

/* Vendor prefix for Firefox */
-moz-border-radius: 10px;

/* Vendor prefix for Safari and Chrome */
-webkit-border-radius: 10px;
```
The purpose of vendor prefixes is to provide support for browser-specific features and ensure that the design and layout of a website is consistent across different browsers. They also allow developers to use new CSS features that may not yet be widely supported, without having to wait for all browsers to implement the feature natively.

# 4. What is the difference between CSS Grid and Flexbox?
CSS Grid and Flexbox are both layout systems in CSS that allow you to create complex, responsive designs. However, they are used for different types of layout and have some key differences.

CSS Grid is a two-dimensional layout system, meaning it can handle both columns and rows. It is best suited for creating grid-based layouts, such as those found in image galleries, dashboards, and other types of applications. With grid, you can specify the number of columns and rows, and position elements within them. It allows you to create explicit grid, and also to position elements anywhere you want on the grid, even overlapping them.

Flexbox, on the other hand, is a one-dimensional layout system, meaning it can handle either columns or rows, but not both. It is best suited for creating flexible, flowing layouts, such as those found in navigation menus, lists, and other types of content that need to adjust to different screen sizes. With flexbox, you can specify the direction of the layout (horizontal or vertical), and control the alignment, distribution, and proportion of space among elements.

- In summary, CSS Grid is best for creating grid-based layouts and Flexbox is best for creating flexible, flowing layouts.

# 5. How might you Speed Up a Slow App? hint Google Lighthouse in Chrome Developer Tools....
Google Lighthouse is an automated tool that can audit the performance, accessibility, and best practices of web pages. It can be run in Chrome DevTools or as a command-line tool.

Here are some ways to use Lighthouse to speed up a slow app:

1. Run the Lighthouse audit: Open Chrome DevTools, go to the Audits panel, and select the "Performance" category. Run the audit to get a report on the page's performance.

2. Analyze the report: Lighthouse will provide a score for each category, as well as specific recommendations for how to improve the performance of the app.

3. Look for opportunities to optimize resources: Lighthouse will identify resources that are slow to load and may be causing delays. Some examples might be large images, fonts, or scripts that can be optimized or lazy loaded.

4. Use code splitting: Code splitting is a technique that allows you to break your JavaScript code into smaller chunks, which can be loaded on-demand. This can help to reduce the initial load time of the app and make it faster.

5. Optimize images: Optimizing images can help to reduce their file size and improve load times. Tools like imagemin or Kraken.io can be used to compress images and make them load faster.

6. Use a Content Delivery Network (CDN): A CDN can help to distribute resources across multiple servers and locations, which can help to improve the load times for users in different parts of the world.

7. Monitor the App performance: Use browser's performance tab to monitor the performance of your app, this will give you insights on what's causing delays.

# 6. What is CRUD?
CRUD stands for Create, Read, Update, and Delete. It is a set of basic operations that are commonly used in database and information systems to manipulate data.

- Create: This operation is used to create new records in the database. For example, inserting a new customer into a customer table.

- Read: This operation is used to retrieve data from the database. For example, reading a customer's information from a customer table.

- Update: This operation is used to update existing records in the database. For example, changing a customer's address in a customer table.

- Delete: This operation is used to delete records from the database. For example, deleting a customer from a customer table.

CRUD operations are the foundation of most database-driven systems and play an important role in data management. In a web development context, it can be used to develop web applications that can interact with a database to create, read, update, and delete records.

CRUD operations can be performed by various means like SQL, NoSQL, ORM, and so on. With the help of these technologies, developers can create, read, update, and delete records in a database without knowing the underlying SQL statements.

# 7. What is OOP?
OOP stands for Object-Oriented Programming. It is a programming paradigm that is based on the concept of "objects", which can contain data and methods that operate on that data.

In OOP, the objects are instances of classes, which are templates for creating objects. A class defines the properties and behaviors of the objects that will be created from it. Each object created from a class is called an instance of that class.

OOP has several key concepts such as:

- Encapsulation: The idea of wrapping data and methods that operate on that data within a single unit (an object) and hiding the details of the implementation from the outside world.

- Inheritance: The ability of one class to inherit properties and methods from another class, which allows for code reuse and a more organized structure for the codebase.

- Polymorphism: The ability of objects of different classes to be treated as objects of a common class, which allows for more flexible and dynamic code.

- Abstraction: The process of identifying the common properties and behaviors of a set of related objects and creating a new class that encapsulates them.

OOP is a widely used programming paradigm, and many modern programming languages such as Java, C#, C++, Python, Ruby, and PHP support OOP.

OOP can be very beneficial in creating maintainable, modular, and efficient code. It allows developers to create complex systems by breaking them down into smaller, more manageable pieces. It also makes the code easier to understand, test, and modify.