function insert(num)
        {
            let numero = document.getElementById("resultado").innerHTML; 
            document.getElementById("resultado").innerHTML = numero + num;
        };

        function clean()
        {
            document.getElementById("resultado").innerHTML = "";
        };

        function del()
        {
            let novoResultado = document.getElementById("resultado").innerHTML; 
            document.getElementById("resultado").innerHTML = novoResultado.substring(0, novoResultado.length -1);
        };

        function igual()
        {
            let resultado = document.getElementById("resultado").innerHTML; 
            if(resultado)
            {
                document.getElementById("resultado").innerHTML = eval(resultado);
            }else 
            {
                document.getElementById("resultado").innerHTML = "nada...";
            }
        }