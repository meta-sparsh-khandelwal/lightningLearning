({
    handleAddContact : function(component, event, helper) {
        let contact = event.getParam("contact");
        let action = component.get("c.saveContact");
        action.setParams({
            "contact": contact
        });
        action.setCallback(this, function(response){
            let state = response.getState();
            console.log('Response is : ' + JSON.stringify(response.getReturnValue()));
            if (state === "SUCCESS") {
                console.log('Contact record inserted ' + event.getParam("contact").Id);
                component.set("v.showSuccess","true");
                setTimeout(() => {
                    component.set("v.showSuccess","false")
                }, 5000);
            }
            else if(state === "ERROR") {
                console.log('Contact record not inserted ');
                component.set("v.showError","true");
                setTimeout(() => {
                    component.set("v.showError","false")
                }, 5000);
            }
        });
        $A.enqueueAction(action);
    }
})