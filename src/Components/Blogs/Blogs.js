import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='d-flex flex-column align-items-start ms-5 mt-5'>
                <h2 className='text-2xl font-bold'>_How will you improve the performance of a React Application?</h2>
                <p style={{ maxWidth: '800px' }} className='text-justify p-2'>
                    <ul>
                        <li>Keeping component state local where necessary.</li>
                        <li>Memoizing React components to prevent unnecessary re-renders.</li>
                        <li>Code-splitting in React using dynamic import()</li>
                        <li>Windowing or list virtualization in React.</li>
                        <li>Lazy loading images in React.</li>
                    </ul>
                </p>
                <h2 className='text-2xl font-bold'>_What are the different ways to manage a state in a React application?</h2>
                <p style={{ maxWidth: '800px' }} className='text-justify p-2'>
                    Let's cover each of these in detail:

                    Local (UI) state – Local state is data we manage in one or another component.

                    Local state is most often managed in React using the useState hook.

                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                    Global (UI) state – Global state is data we manage across multiple components.

                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                    A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                    Sometimes state we think should be local might become global.

                    Server state – Data that comes from an external server that must be integrated with our UI state.

                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                    There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                    Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                    URL state – Data that exists on our URLs, including the pathname and query parameters.

                    URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                    There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                </p>
                <h2 className='text-2xl font-bold'>_How does prototypical inheritance work?</h2>
                <p style={{ maxWidth: '800px' }} className='text-justify p-2'>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                <h2 className='text-2xl font-bold'>_Why you do not set the state directly in React. For example,<br></br>if you have const [products, setProducts] = useState([]).<br></br>Why you do not set products = [...] instead,<br></br>you use the setProducts</h2>
                <p style={{ maxWidth: '800px' }} className='text-justify p-2'>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made.</p>
                <h2>_You have an array of products. Each product has a name, price, description, etc.<br></br>How will you implement a search to find products by name?</h2>
                <p style={{ maxWidth: '800px' }} className='text-justify p-2'>
                    let obj = arr.find(o => o.name === 'name');

                    console.log(obj);
                </p>
                <h2 className='text-2xl font-bold'>_What is a unit test? Why should write unit tests?</h2>
                <p style={{ maxWidth: '800px' }} className='text-justify p-2'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
        </div>
    );
};

export default Blogs;