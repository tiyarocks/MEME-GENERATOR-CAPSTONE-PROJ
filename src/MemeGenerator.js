//this will be holding data and making calls to the API it should be a class based component
import React,{Component} from "react"

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]
        }
        this.handleChange=this.handleChange.bind(this)
    }
        /*  we will be using an api that provides a bunch of meme imgs
        1. make an api call and save the data that comes backto a new state prop called allMemeImgs(
            the data that comes back is an array)
            */
    componentDidMount(){
        
        fetch("https://api.imgflip.com/get_memes")
            .then(response=>response.json)
            .then(response=>{
                const {memes}=response.data
               // console.log(memes[0])
                this.setState({allMemeImgs:memes})
            })
    }
    handleChange(event){
        const {name,value}=event.target
        this.setState({
            [name]:value
        })

    }
    render(){
        return(
            <div>
                {   //controlled form   }
                <form className="meme-form">
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top text"
                        value={this.state.topText}
                        onChange={this.handleChange}

                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>GEN</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>

                </div>
            </div>

        )
    }
}
export default MemeGenerator