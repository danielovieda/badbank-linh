import { useBankContext } from "../utils/BankContext";

export const Alldata = () => {
  const { bank } = useBankContext();
  console.log(bank)
  return (
    <>
    <h5>All Data in Store<br>

    </br>
    {JSON.stringify(bank)}
    </h5>
    <br></br>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
    </tr>
  </thead>
  <tbody>
  {
    <tr>
    <td>
    {bank.users.map((account) => {
                    return (    
                        <td className="list-group-item">{account.username}</td>
                      
                )
  })}
    </td>
    <td>
    {bank.users.map((account) => {
                    return (    
                        <td className="list-group-item">{account.email}</td>
                      
                )
  })}
    </td>
    <td>
    {bank.users.map((account) => {
                    return (    
                        <td className="list-group-item">{account.password}</td>
                      
                )
  })}
    </td>
    </tr>
  }
  </tbody>
</table>
    </>
  );
}

