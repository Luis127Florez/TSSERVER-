1.	http://localhost:8000/api/solicitudes
type :get
obtiene todas las solicitudes

2.	http://localhost:8000/api/solicitudes/idsolicitud
type :get
obtiene una solicitud especifica dependiendo el id


3.	http://localhost:8000/api/solicitudes
type: post 

guarda una solicitud requiere body
{
    "NombreEmpresa": "…",
    "nitEmpresa": "…",
    "EstadiaEnEmpresa": " …",
    "iduser": number,
    "Monto": number,
    "estado": true
}

4.	http://localhost:8000/api/solicitudes/idsolicitud
type: put
edita una solicitud requiere body con la nueva data 
{
    "NombreEmpresa": "…",
    "nitEmpresa": "…",
    "EstadiaEnEmpresa": " …",
    "iduser": number,
    "Monto": number,
    "estado": true
}

5.	http://localhost:8000/api/solicitudes/idsolicitud
type : delete

elimina una solicitud

6.	http://localhost:8000/api/solicitudes/iduser
type: patch

obtiene todas las solicitudes de un usuario dependiendo el iduser
____________________________________________________________________

7.	http://localhost:8000/api/users

type: get
retorna todos los usuarios existentes 

8.	http://localhost:8000/api/users
type: get
retorna un usuario en específico dependiendo el iduser enviado como parámetro 

9.	http://localhost:8000/api/users
type: patch

retorna un usuario en específico si se encuentra en  la base de datos dependiendo el email requiere body
{
    "email": "pero@gmail.con"
}
 si no se encuentra retorna null

10.	 http://localhost:8000/api/users
type: post 
guarda un usuario nuevo requiere un body con la data a ingresar
    {
        "nombre": "pedro",
        "Apellidos": "garcia",
        "email": "pero@gmail.con",
        "TipoDocumento": null,
        "NumCedula": 100241855,
        "estado": true,
        "Telefono": 2147483647,
        "Edad": 30,
        "sexo": "m",
        "rol": "ADMIN",
        "Contraseña": "pedo2456"
    }
11.	http://localhost:8000/api/users/iduser
type: put
edita los datos de un usuario en específico dependiendo el iduser requiere un body con la data a actualizar

    {
        "nombre": "…",
        "Apellidos": "...",
        "email": "… ",
        "TipoDocumento": null,
        "NumCedula": 100241855,
        "estado": true,
        "Telefono": 2147483647,
        "Edad": 31,
        "sexo": "m",
        "rol": "ADMIN",
        "Contraseña": "pedo2456"
    }

12.	http://localhost:8000/api/users/iduser
type :delete
elimina un usuario dependiendo el iduser recibido como para metro 
____________________________________________________________________________________________________

13.	http://localhost:8000/api/unionU_S
14.	Type: get
retorna todas la solicitudes y los usuarios de forma unificada


________________________________________________________NO  USAR __NO ESTAN LISTAS___

15.	http://localhost:8000/api/index
Type :get 
Obtiene un archivo


16.	http://localhost:8000/api/index
type: post
guarda un archivo

