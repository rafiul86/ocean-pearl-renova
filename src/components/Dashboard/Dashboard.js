import React from 'react';
import SetAdmin from './Admin/SetAdmin';
import AllOrders from './AllOrders/AllOrders';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section className="row">
            <div className="col-md-3">
            <Sidebar/>
            </div>
            <div className="col-md-8">
            <h1 className="text-center">ABOUT US</h1>
            <p>The construction industry is in a constant state of change, and those who want to be in the know about what is happening in every corner of the industry need to be plugged into the right resources, which often requires keeping up with the top construction blogs available.


Whether you want to stay current with trends in 3-D printing (this is a big deal in China right now) or just need to find information on the best construction management software or books, there are resources out there that don't just sell but also inform.


The best places to find objective and timely information on these and a host of other construction-related topics is through construction blogs, and there are more of them out there than you might think. Here is a list of just a few of the best ones.


Design and Specific Construction Blogs
Whether you enjoy reading about construction from a design perspective or are looking for specifics on different types of building like landscaping and architecture, plenty of resources are available online to meet your needs.

Building Design + Construction is a blog that offers a broad range of articles covering all areas of construction and building design. Executives and managers, in particular, will appreciate the content here as it offers unique perspectives on business strategies. Meanwhile, Raken, which develops reporting software for construction, runs a great blog that features a wide variety of articles on construction industry news, trends, regional job opportunities, education, and technology.

For those more in tune with the architectural side of building and design, Build Blog delves deep into the art of construction and always provides a good, entertaining, and informative read about the current state of the world of architecture. For readers with an affection for the design side of construction, Inhabitat is a great resource, whose tagline, "Design will save the world," speaks volumes about its passion for the subject. The blog explores the materials, technology, and building practices that are driving sustainability in today's construction environments.</p>
            </div>
        </section>
    );
};

export default Dashboard;