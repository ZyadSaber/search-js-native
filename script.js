const array_data = [{
  "first_name": "Kristian",
  "last_name": "Ripping",
  "email": "kripping0@hexun.com"
}, {
  "first_name": "Wittie",
  "last_name": "Flexman",
  "email": "wflexman1@sogou.com"
}, {
  "first_name": "Lorianne",
  "last_name": "Lansbury",
  "email": "llansbury2@delicious.com"
}, {
  "first_name": "Debor",
  "last_name": "Crumbie",
  "email": "dcrumbie3@shareasale.com"
}, {
  "first_name": "Quinn",
  "last_name": "Zimmermanns",
  "email": "qzimmermanns4@cnn.com"
}, {
  "first_name": "Kasper",
  "last_name": "Lindholm",
  "email": "klindholm5@fastcompany.com"
}, {
  "first_name": "Eldredge",
  "last_name": "Witcherley",
  "email": "ewitcherley6@elegantthemes.com"
}, {
  "first_name": "Randolph",
  "last_name": "McKmurrie",
  "email": "rmckmurrie7@yelp.com"
}, {
  "first_name": "Jenny",
  "last_name": "Novakovic",
  "email": "jnovakovic8@sina.com.cn"
}, {
  "first_name": "Talyah",
  "last_name": "Bruyns",
  "email": "tbruyns9@army.mil"
}, {
  "first_name": "Barton",
  "last_name": "Sanchis",
  "email": "bsanchisa@reference.com"
}, {
  "first_name": "Norah",
  "last_name": "Adran",
  "email": "nadranb@yale.edu"
}, {
  "first_name": "Christophe",
  "last_name": "Hyder",
  "email": "chyderc@ask.com"
}, {
  "first_name": "Eugine",
  "last_name": "Petronis",
  "email": "epetronisd@uol.com.br"
}, {
  "first_name": "Chaddie",
  "last_name": "Linney",
  "email": "clinneye@google.ru"
}, {
  "first_name": "Kathlin",
  "last_name": "Freeborne",
  "email": "kfreebornef@toplist.cz"
}, {
  "first_name": "Vinni",
  "last_name": "Bretland",
  "email": "vbretlandg@storify.com"
}, {
  "first_name": "Caitrin",
  "last_name": "Alster",
  "email": "calsterh@hatena.ne.jp"
}, {
  "first_name": "Lyssa",
  "last_name": "Fyldes",
  "email": "lfyldesi@digg.com"
}, {
  "first_name": "Maggy",
  "last_name": "Burberye",
  "email": "mburberyej@vkontakte.ru"
}];

function generate (data) {
    let table = document.getElementById("table_body") 

        for (let i = 0; i < data.length; i++){
         console.log("stage one")
        //  console.log(data[i].first_name.toLowerCase())
                 let row = `<tr> 
            <td>${data[i].first_name}</td>
            <td>${data[i].last_name}</td>
            <td>${data[i].email}</td>
            </tr>`
            table.innerHTML += row
            }
        };

        generate(array_data);

        //Stage two for the code with search bar

        function check (data) {
            let one = document.getElementById("one").value;
            let two = document.getElementById("two").value;
            let three = document.getElementById("three").value;
            let table = document.getElementById("table_body");
            table.innerHTML = ""

            if (one.toLowerCase() == "" && two.toLowerCase() == "" && three.toLowerCase() == ""){
                generate(array_data)
                console.log("empty")
            }else {
                console.log("not empty")

                for (let i = 0; i < data.length; i++){
                    if (!data[i].first_name.toLowerCase().includes(one.toLowerCase()) || !data[i].last_name.toLowerCase().includes(two.toLowerCase()) || !data[i].email.toLowerCase().includes(three.toLowerCase())) {
                        console.log("ff");
                        continue;
                    } else {
                        let row = `<tr> 
            <td>${data[i].first_name}</td>
            <td>${data[i].last_name}</td>
            <td>${data[i].email}</td>
            </tr>`
            table.innerHTML += row
                    }
            }
            
            }

        }