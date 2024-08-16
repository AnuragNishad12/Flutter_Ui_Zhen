const alertBox = `
class AlertBox extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Flutter Custom Dialog Demo'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            AlertBoxGB(
              context,
              title: 'Custom Dialog',
              description: 'This is a custom dialog box.',
              closeButtonTitle: 'Close',
              nextButtonTitle: 'Next',
              closeButtonColor: Color(0xFF61FF11),
              nextButtonColor: Colors.red,
              nextButtonBackground: Color(0xFFFF0000),
              cardColor: Color(0xFFCF00FF),
            );
          },
          child: Text('Show Custom Dialog'),
        ),
      ),
    );
  }
}
`

const autofill = `


import 'package:flutter/material.dart';
import 'package:zhen/zhen.dart';

class AppBarCus extends StatefulWidget {
  const AppBarCus({super.key});

  @override
  State<AppBarCus> createState() => _AppBarCusState();
}

class _AppBarCusState extends State<AppBarCus> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final TextEditingController _nameController = TextEditingController();

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    _nameController.dispose();
    super.dispose();
  }


  @override
  Widget build(BuildContext context) {
    return
        Scaffold(
          appBar: AppBar(
            title: Text('Autofill Group Demo'),
          ),
          body: Padding(
            padding: const EdgeInsets.all(16.0),
            child: AutofillGroup(
              child: Column(
                children: [
                  Custom_Auto_Filled(
                    controller: _emailController,
                    labelText: "email",
                    autofillHints: [AutofillHints.email],
                    obscureText: false,
                  )
                 ]
              ),
            ),
          ),
        );
  }
}
`
const Cus_Bottom_Navigation = `
import 'package:flutter/material.dart';
import 'package:zhen/zhen.dart';

class MyBottomNavigationBar extends StatefulWidget {
  const MyBottomNavigationBar({super.key});

  @override
  State<MyBottomNavigationBar> createState() => _MyBottomNavigationBarState();
}

class _MyBottomNavigationBarState extends State<MyBottomNavigationBar> {
  int _selectedIndex = 0;

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomBottomNavigationBar(
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
        screens: [
          Home(), // Replace with your Home screen widget
        Serach(), // Replace with your Search screen widget
          Profile(), // Replace with your Profile screen widget
        ],
      ),
    );
  }
}

class Profile extends StatelessWidget {
  const Profile({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:Center(
        child: Text("Profile"),
      ),
    );
  }
}

class Serach extends StatelessWidget {
  const Serach({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:Center(
        child: Text("Search"),
      ),
    );
  }
}

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:Center(
        child: Text("Home"),
      ),
    );
  }
}
`

const gradient_button = `
import 'package:flutter/material.dart';
import 'package:zhen/zhen.dart';
void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home:Material(
         child:Scaffold(
           appBar: AppBar(
             title: Text('Breadcrumb Example'),
           ),
           body: Center(
             child: Zhen_GradientButton(
                 text: "Gradient Button",
                 textColor: Colors.white,
                 gOneColor: Colors.red,
                 gTwoColor: Colors.black,
                 onPressed: (){

                 },
             ),
           ),
         ),
      )
    );
  }
}
`

const zhen_Carousel = `

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:zhen/zhen.dart';

class Carousel extends StatelessWidget {
  const Carousel({super.key});


  @override
  Widget build(BuildContext context) {
    final List<String> imgList = [
      'https://via.placeholder.com/600/92c952',
      'https://via.placeholder.com/600/771796',
      'https://via.placeholder.com/600/24f355',
    ];
    return Scaffold(
      body: Center(
        child: Container(
          width: double.infinity, // Set a width if needed
          height: 400.0, // Set a height if needed
          child: zhenCarousel(imgList),
        ),
      ),
    );
  }
}
`

const custom_Card = `
void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      home:Scaffold(
        body: Center(
        child: CustomCard(title: "Anurag",imageUrl: 
        "https://images.pexels.com/photos/26088712
        /pexels-photo-26088712/free-"
            "photo-of-woman-standing-in-entrance.jpeg?
            auto=compress&cs=tinysrgb&w=600&lazy=load",)
      )
      )
    );
  }
}`


const Custom_progress =`
void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home:Scaffold(
        body: Center(
         child: CustomCircularProgressIndicator(),
        )
      )
    );
  }
}
`

const Zhen_Search_box =
`void main() {
  runApp(MyApp());
}
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home:Scaffold(
        body: Center(
         child: Zhen_SearchBar(),
        )
      )
    );
  }
}
`

const Zhen_ComboxBox2 = 
`void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home:Scaffold(
        body: Center(
         child: ComboBoxExample(),
        )
      )
    );
  }
}

class DropDownAnu extends StatefulWidget {
  const DropDownAnu({super.key});
  @override
  State<DropDownAnu> createState() => _DropDownAnuState();
}
class _DropDownAnuState extends State<DropDownAnu> {
  String _selected = "item1";
  final List<String> list = ["item1", "item2"];

  @override
  Widget build(BuildContext context) {
    return Zhen_ComboBox(
      _selected,
      list,
          (String? newValue) {
      setState(() {
        _selected = newValue!;
      });
    },
    );
  }
}
`



export { alertBox, autofill,Cus_Bottom_Navigation,
  gradient_button, zhen_Carousel,custom_Card,Custom_progress,Zhen_Search_box,Zhen_ComboxBox2};



