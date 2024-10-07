type Userx = {
 name: string;
 surname: string;
 email: string;
 password: string;
}

function createOrUpdateUser(initialValues: Userx): Userx {
    const defaultUser: Userx = {
        name: '',
        surname: '',
        email: '',
        password: '',
    };
    return { ...defaultUser, ...initialValues };
}

const newUser=createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
console.log('gen less4 newUser:')
console.log(newUser);
