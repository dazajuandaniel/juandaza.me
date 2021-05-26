# Auto Scaling Groups
Scale in/out to match increase/decrease load. Ensures we have a maximum/minimum machines running
![asg](/images/asg.png)

## Attributes
1. Launch configuration
    * AMI + Instance Type
    * EC2 User Data
    * EBS
    * Security Groups
    * SSH Keys
2. Min/Max Capacity
3. Network + Subnets
4. Load Balancer information
5. Scaling Policies

## Alarms/Rules
Scaling is possible based on `Cloudwatch Alarms`, `Rules` or `Custom Metrics`. Possible metrics include avg utilization.

## Scaling Policies
1. Target Tracking Scaling:
    * Average ASG CPU to stay around 40%
2. Simple/Step Policy:
    * When Cloudwatch event is triggered, then add 2 units
3. Scheduled Actions:
    * Anticipate based on future events

**Scaling Cooldowns**

Helps ensure that the ASG doesn't launch or terminate additional instances before the previous scaling activity takes effect.

## Rules for Instances Being Terminated
*Default Termination Policy* -> By default tries to balance the number of instances in an AZ:
    1. Find the AZ with the most No. of instances
    2. Delete the one with the oldest launch config
    ![asg_default_termination](/images/asg_default_termination.png)
    
## Lifecycle Hooks
Allows the user to to perform extra steps before going in service or after going into service. For example, to extract log files before the instance is terminated completely.
![asg_lifecycle_hooks](/images/asg_lifecycle_hooks.png)

## Launch Template vs Launch Config
**Launch Config:** Considered legacy -> Must be recreated every time

**Launch Template:** Newer
* Can have multiple versions
* Mix OnDemand & Spot instances
* T2 unlimited burst feature
* Create parameters subset

## Other Notes
* Impose stress on Instance: 
    ```sh
    sudo apt-get install stress
    ```