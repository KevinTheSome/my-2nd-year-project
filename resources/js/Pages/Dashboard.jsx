import Saidbar from '../Components/Saidbar'
const Dashboard = () => {

    return (
      <>
        <div className='v-screen h-screen grid grid-cols-[255px_1fr]'>
          <Saidbar />

          <section>
          <form action="">
            <input type="text" placeholder="first name" />
            <input type="text" placeholder="last name" />
            <select name="sex" id="sex">
              <option value="male">male</option>
              <option value="femail">female</option>
            </select>
            <button type="submit">Add</button>
          </form>
          </section>

        </div>
      </>
    )
  }
  
export default Dashboard