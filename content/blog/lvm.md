+++
title = "Understanding LVM"
date = "2021-10-17"
+++

Have you ever wanted to take a secondary drive and just combine onto your exsiting system,Well you’re in luck if you are using Linux specifically with LVM.But what is LVM?

LVM stands for Logical Volume Management. It’s a disk management tool that makes it easier to manage disk space. In LVM, instead of creating partitions, you create logical volumes, and then you can just as easily mount those volumes in your filesystem as you’d a disk partition.

#### Why use LVM?
The main advantage of LVM is how easy it is to resize a volume or volume group. It abstracts away all the ugly parts (partitions, raw disks) and leaves us with a central storage pool to work with.

If you’ve ever experienced the horror of partition resizing, you’d wanna use LVM.

Acronyms you must know!
*PV* – Physical Volume

*VG* – Volume Group

*LV* – Logical Volume

{{figure(src="/assests/lvm-guide.jpg", alt="LVM",caption="LVM")}}

*LVM Commands*
#### LVM Layer 1 – Hard Drives, Partitions, and Physical Volumes
- `lvmdiskscan` – system readout of volumes and partitions
- `pvdisplay` – display detailed info on physical volumes
- `pvscan` – display disks with physical volumes
- `pvcreate /dev/sda1` – create a physical volume from sda1
- `pvchange -x n /dev/sda1` – Disallow using a disk partition
- `pvresize /dev/sda1` – resize sda1 PV to use all of the partition
- `pvresize --setphysicalvolumesize 140G /dev/sda1` – resize sda1 to 140g
- `pvmove /dev/sda1` – can move data out of sda1 to other PVs in VG.
- `pvremove /dev/sda1` – delete Physical volume
#### LVM Layer 2 – Volume Groups
- `vgcreate vg1 /dev/sda1 /dev/sdb1` – create a volume group from two drives
- `vgextend vg1 /dev/sdb1` – add PV to the volume group
- `vgdisplay vg1` – Display details on a volume group
- `vgscan` – list volume groups
- `vgreduce vg1 /dev/sda1` – Removes the drive from vg1. (use pvmove /dev/sda1 before removing the drive from vg1)
- `vgchange` – you can activate/deactive and change perameteres
- `vgremove vg1` – Remove volume group vg1
- `vgsplit` and `vgmerge` can split and merge volume groups
- `vgrename` – renames a volume group
#### LVM Layer 3 – Logical Volumes and File Systems
- `lvcreate -L 10G vg1` – create a 10 GB logical volume on volume group vg1
- `lvchange` and `lvreduce` are commands that typically aren’t used
- `lvrename` – rename logical volume
- `lvremove` – removes a logical volume
- `lvscan` – shows logical volumes
- `lvdisplay` – shows details on logical volumes
- `lvextend -l +100%FREE /dev/vg1/lv1` – One of the most common commands used to extend logical volume lv1 that takes up ALL of the remaining free space on the volume group vg1.
- `resize2fs /dev/vg1/lv1` – resize the file system to the size of the logical volume lv1.

#### Conclusion
LVM is fantastic for managing a system, but remember that the more drives you make in a volume group that the likely it is to fail. Instead of having one point of failure you can open yourself up for multiple points when making a large system with multiple drives.

