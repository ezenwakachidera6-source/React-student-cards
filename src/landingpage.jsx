
function NavBar() {

    return (
      <>
        <nav>
            <div>Home</div>
            <div>About</div>
            <li>
                <ul><a href="">Twitter</a></ul>
                <ul><a href="">Instagram</a></ul>
                <ul><a href="">Facebook</a></ul>
                <ul><a href="">Snapchat</a></ul>
            </li>
            <button>Contact Us</button>
        </nav>

        <section>
            <main>
            <p>Name</p><span><input type="text" placeholder="Your name"/></span>
            <p>Company details</p><span><input type="text" placeholder="Company details"/></span>
            <p>Company Produucts</p><span><textarea name="" id="" placeholder="What we sell"></textarea></span>
            </main>
          
        </section>

        <footer>
            <div>Contact Information</div>
            <div>email address(*******@gmail.com)</div>
            <div>Phone number(+234***)</div>
        </footer>
    
      </>
    )

  }
export default NavBar

